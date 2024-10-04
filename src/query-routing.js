import { cosineSimilarity } from '@langchain/core/utils/math';
import { embeddingModel } from './model';

const descrip1 = `
 了解金額相關計算，包含勞基法、公司薪資、獎金加給等等
`;

const descrip2 = `
 了解員工的信息
`;

const templates = [descrip1, descrip2, decrip3];
const templateEmbeddings = await embeddingModel.embedDocuments(templates);

const promptRouter = async (query) => {
  const queryEmbedding = await embeddingModel.embedQuery(query);
	const r = cosineSimilarity([queryEmbedding], templateEmbeddings);
	const similarity = r[0];
	const curDescripIndex = similarity.reduce((preIndex, cur, index, arr) => {
		if (cur > arr[preIndex]) {
			return index;
		}
		return preIndex;
	}, 0);

	const curDescrip = templates[curDescripIndex];
	console.log(curDescrip);
}

await promptRouter('小明的員工id是什麼?');

await promptRouter('告訴我獎金如何計算?');