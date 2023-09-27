import { useBase, createRouter, defineEventHandler } from "h3";

import * as taskCtrl from "~~/server/controller/task";

const router = createRouter();

router.get("/task", defineEventHandler(taskCtrl.read));
router.post("/task", defineEventHandler(taskCtrl.create));
router.put("/task/:id", defineEventHandler(taskCtrl.update));
router.delete("/task/:id", defineEventHandler(taskCtrl.remove));

export default useBase("/api", router.handler);
