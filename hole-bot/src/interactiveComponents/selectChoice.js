import { InteractionResponseType } from 'discord-interactions';
import 'dotenv/config';
import { getResult } from "../game";
import { getRandomEmoji } from '../utils';

export async function selectChoice(componentId, req, res){
    // get the associated game ID
    const gameId = componentId.replace('select_choice_', '');

    if (activeGames[gameId]) {
      // Get user ID and object choice for responding user
      const userId = req.body.member.user.id;
      const objectName = data.values[0];
      // Calculate result from helper function
      const resultStr = getResult(activeGames[gameId], {
        id: userId,
        objectName,
      });

      // Remove game from storage
      delete activeGames[gameId];
      // Update message with token in request body
      const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}/messages/${req.body.message.id}`;

      try {
        // Send results
        await res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: { content: resultStr },
        });
        // Update ephemeral message
        await DiscordRequest(endpoint, {
          method: 'PATCH',
          body: {
            content: 'Nice choice ' + getRandomEmoji(),
            components: [],
          },
        });
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
}