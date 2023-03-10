// JavaScript SDK
import PocketBase from "pocketbase";
import "cross-fetch/polyfill";

const pb = new PocketBase("http://127.0.0.1:8090"); // update this later

pb.autoCancellation(false);

export const createPost = async (formData: FormData) => {
  try {
    const record = await pb.collection("posts").create(formData);
  } catch (e: any) {
  } finally {
  }
};

export const updatePost = async (formData: FormData, recordID: string) => {
  try {
    const record = await pb.collection("posts").update(recordID, formData);
  } catch (e: any) {
  } finally {
  }
};

export const deletePost = async (recordID: string) => {
  try {
    await pb.collection("posts").delete(recordID);
  } catch (e: any) {
  } finally {
  }
};

export default pb;
