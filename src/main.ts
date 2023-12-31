import config from "./config/conifg.js";
import ky2 from "./ky2.js";

const main = async () => {
    let logger;

    try {
      const configs = config;
      const agent = new ky2(configs);
      await agent.start();
      logger = agent.logger;
      return true;
    } catch(err) {
      logger.error(err);
    }
}

main();