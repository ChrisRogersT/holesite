import { InteractionResponseType } from 'discord-interactions';

export function sendError(res, message){
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: message,
        },
    });
}