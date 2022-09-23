import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
} from 'discord-interactions';
import { VerifyDiscordRequest } from './utils.js';
import {
  CHALLENGE_COMMAND,
  GET_BIT_COMMAND,
  TEST_COMMAND,
  HasGuildCommands,
} from './commands.js';
import { test } from './slashCommands/test.js';
import { challenge } from './slashCommands/challenge.js';
import { sendError } from './sendError.js';
import { getBit } from './slashCommands/getBit.js';


// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));


/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post('/interactions', async function (req, res) {
  // Interaction type and data
  const { type, id, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = data;

    switch(name){
      case 'test': return test(res);
      case 'bit': return getBit(res, options[0].value);
      // case 'challenge':
      //   if(!id) return sendError(res, 'Need an id');
      //   else return challenge(res, req);
      default: return sendError(res, 'Command not recognized');
    }
  }

  /**
   * Handle requests from interactive components
   * See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
   */
  if (type === InteractionType.MESSAGE_COMPONENT) {
    // custom_id set in payload when sending message component
    // const componentId = data.custom_id;

    // if (componentId.startsWith('accept_button_')) {
      
    // } else if (componentId.startsWith('select_choice_')) {
    // }
  }
});

app.listen(PORT, () => {
  // Check if guild commands from commands.json are installed (if not, install them)
  HasGuildCommands(process.env.APP_ID, process.env.GUILD_ID, [
    CHALLENGE_COMMAND,
    GET_BIT_COMMAND,
    TEST_COMMAND,
  ]);
});