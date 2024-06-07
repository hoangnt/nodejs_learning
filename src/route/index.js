import entry from "./entry";
import auth from "./auth";
import article from "./article";

const initRoute = (app) => {
  app.use("/", entry);
  app.use("/api/v1", auth);
  app.use("/api/v1", article);
};

export default initRoute;
