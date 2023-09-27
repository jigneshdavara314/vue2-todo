import * as taskModel from "~~/server/model/task";

export const read = async () => {
  try {
    return await taskModel.read();
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export const create = async (evt) => {
  try {
    const body = await readBody(evt);
    const isExist = await taskModel.details({
      title: body.title,
    });
    if (isExist) {
      throw createError({
        statusCode: 400,
        statusMessage: "Title Already Exists",
      });
    }
    return await taskModel.create({
      title: body.title,
    });
  } catch (err) {
    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: err?.statusMessage || "Something went wrong",
    });
  }
};

export const update = async (evt) => {
  try {
    return await taskModel.update(evt.context.params?.id);
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export const remove = async (evt) => {
  try {
    return await taskModel.remove(evt.context.params?.id);
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};
