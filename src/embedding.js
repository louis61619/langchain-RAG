import { embeddingModel } from './model';

const documentRes = await embeddingModel.embedDocuments(["Hello world", "Bye bye"]);

console.log(documentRes);