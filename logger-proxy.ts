
import logger from "./logger"; 

export function createLoggingProxy<T extends object>(target: T): T {
  return new Proxy(target, {
    get(target, prop, receiver) {
      const originalValue = Reflect.get(target, prop, receiver);
      
      if (typeof originalValue === "function") {
        return function(this: any, ...args: any[]) {
          logger.info(`Calling method: ${String(prop)} with args: ${JSON.stringify(args)}`);
          
          try {
            const result = originalValue.apply(this, args);
            
            // Handle both sync and async functions
            if (result && typeof result.then === 'function') {
              return result.then((res: any) => {
                logger.info(`Method: ${String(prop)} executed successfully`);
                return res;
              }).catch((error: any) => {
                logger.error(`Method: ${String(prop)} failed: ${error.message}`);
                throw error;
              });
            } else {
              logger.info(`Method: ${String(prop)} executed successfully`);
              return result;
            }
          } catch (error: any) {
            logger.error(`Method: ${String(prop)} failed: ${error.message}`);
            throw error;
          }
        };
      }
      
      return originalValue; // Return properties as-is
    },
  });
}