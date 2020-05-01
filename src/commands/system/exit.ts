import Command from '../../lib/structures/Command';
import { TypicalMessage } from '../../lib/types/typicalbot';
import { Modes, PermissionsLevels } from '../../lib/utils/constants';

export default class extends Command {
    aliases = ['quit'];
    mode = Modes.STRICT;
    permission = PermissionsLevels.BOT_OWNER;

    async execute(message: TypicalMessage) {
        await message.send('Exiting...');
        process.exit(0);
    }
}
