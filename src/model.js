import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { OpenAIEmbeddings } from '@langchain/openai';

const { OPENAI_API_KEY } = process.env;

const chatModel = new ChatOpenAI({ 
  modelName: 'gpt-3.5-turbo-1106', 
  openAIApiKey: OPENAI_API_KEY 
});

const embeddingModel = new OpenAIEmbeddings({
  model: "text-embedding-3-large",
  openAIApiKey: OPENAI_API_KEY,
});

export { embeddingModel, chatModel };