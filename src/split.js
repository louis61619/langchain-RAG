import { CharacterTextSplitter } from 'langchain/text_splitter';

const text = `
Hi.
I'm KKKKKKKK
How? Are? you?
Okay then dfiffi.
122223334444
what do you do?
what is the wheather?
`;

const splitter = new CharacterTextSplitter({
  separator: '\n', // 分割符
  chunkSize: 20, // 分割的塊的size
  chunkOverlap: 6, // 分割的塊增加一些信息的冗餘
});

const output = await splitter.createDocuments([text]);

console.log(output);