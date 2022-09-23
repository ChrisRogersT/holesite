import { InteractionResponseType } from "discord-interactions";
import fetch from "node-fetch";
import { sendError } from "../sendError.js";

export async function getBit(res, bitID){
    console.log(bitID);
    const url = `https://holesite.vercel.app/api/bit-storage/${bitID}`;
    
    const bitResponse = await fetch(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })

    if(!bitResponse.ok){
        return sendError(res,'object not found');
    }

    const bitObject = await bitResponse.json();
    res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: JSON.stringify(bitObject.markdown)
        }
    })
}