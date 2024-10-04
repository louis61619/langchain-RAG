import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { embeddingModel } from "./model";

const vectorstore = await MemoryVectorStore.fromTexts(
  ["Hello world", "Bye Bye", "nice world"],
  [{ id: 2 }, { id: 1 }, { id: 3 }],
  embeddingModel
);

const res = await vectorstore.similaritySearch("hello", 1);
console.log(res);
