import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { embeddingModel } from './model.js';

const loader = new PDFLoader('assets/民法總則.pdf');
const docs = await loader.load();

const vectorStore = await FaissStore.fromDocuments(docs, embeddingModel);

// const res = await vectorStore.similaritySearch('物權', 1);
// console.log(res);

await vectorStore.save('assets');