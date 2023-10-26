import { settingServe } from "../../http/serve";
import { Method } from "axios";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import asyncThunkMap, { AsyncThunkMap, AsyncThunkValueObject } from "./config";

// eslint-disable-next-line @typescript-eslint/ban-types
type Thunk = Record<AsyncThunkMap, (data?: any) => AsyncThunk<any, void, {}>>;

// 自动生成thunk
const autoAsyncThunk = (name: string, method: Method, url: string) => {
  return createAsyncThunk(name, async (data?: any) => {
    return await settingServe({ data, method, url });
  });
};

const thunk: any = {};
for (const key in asyncThunkMap) {
  let customMethod: Method;
  let url: string;
  if (typeof asyncThunkMap[key] === "string") {
    customMethod = (asyncThunkMap[key] as Method).toLocaleLowerCase() as Method;
    url = "/api/setting/settings_by_main_type_sub_type";
  } else {
    customMethod = (asyncThunkMap[key] as AsyncThunkValueObject).method.toLocaleLowerCase() as Method;
    url = (asyncThunkMap[key] as AsyncThunkValueObject).url;
  }

  const name: AsyncThunkMap = `${key}` as AsyncThunkMap;

  thunk[name] = autoAsyncThunk(name, customMethod, url);
}

export default thunk as Thunk;
