import { embeddingModel } from './model.js';

const documentRes = await embeddingModel.embedDocuments(["Hello world", "Bye bye"]);

console.log(documentRes);