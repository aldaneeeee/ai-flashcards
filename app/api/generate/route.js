import { NextResponse } from "next/server";
import OpenAI from 'openai'

const systemPrompt = ` Welcome to BrainDeck, the ultimate tool for mastering knowledge through efficient and engaging flashcard learning. Whether you're studying for exams, picking up a new skill, or just curious, BrainDeck helps you learn smarter and faster.

1. Create clear and concise questions for the front of the flashcards.
2. Provide accurate and informative answers for the back of the flashcards.
3. Ensure that each flashcard focuses on a single concept or piece of information.

Remember, the goal is to facilitate effective learning and retention of information through these flashcards.

Return the following JSON format
{
  "flashcards":[
    {
    "front": str,
    "back" : str
    }
  ]
}
`
export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
      messages: [
        {role:'system', content:systemPrompt},
        {role:'user',content:data},
      ],
      model:'gpt-4o',
      response_format: {type:'json-abject'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flascard)
}



