import {
    InteractionResponseType,
    MessageComponentTypes,
    ButtonStyleTypes,
} from 'discord-interactions';

// Store for in-progress games. In production, you'd want to use a DB
const activeGames = {};

export function challenge(res, req){
    const userId = req.body.member.user.id;
    // User's object choice
    const objectName = req.body.data.options[0].value;

    // Create active game using message ID as the game ID
    activeGames[id] = {
        id: userId,
        objectName,
    };

    return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
        // Fetches a random emoji to send from a helper function
        content: `Rock papers scissors challenge from <@${userId}>`,
        components: [
        {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
            {
                type: MessageComponentTypes.BUTTON,
                // Append the game ID to use later on
                custom_id: `accept_button_${req.body.id}`,
                label: 'Accept',
                style: ButtonStyleTypes.PRIMARY,
            },
            ],
        },
        ],
    },
    });
}