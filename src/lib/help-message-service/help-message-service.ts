// Help message service

import { HelpMessageTypes } from './help-message-types';

import { COMPACT_HELP_MESSAGE } from './help-messages/compact-help-message';
import { DESERIALIZE_HELP_MESSAGE } from './help-messages/deserialize-help-message';
import { EXPAND_HELP_MESSAGE } from './help-messages/expand-help-message';
import { FLATTEN_HELP_MESSAGE } from './help-messages/flatten-help-message';
import { FRAME_HELP_MESSAGE } from './help-messages/frame-help-message';
import { NORMALIZE_HELP_MESSAGE } from './help-messages/normalize-help-message';
import { SERIALIZE_HELP_MESSAGE } from './help-messages/serialize-help-message';

const MESSAGE_MAP: Map<HelpMessageTypes, string> = new Map([
    [HelpMessageTypes.COMPACT, COMPACT_HELP_MESSAGE],
    [HelpMessageTypes.DESERIALIZE, DESERIALIZE_HELP_MESSAGE],
    [HelpMessageTypes.EXPAND, EXPAND_HELP_MESSAGE],
    [HelpMessageTypes.FLATTEN, FLATTEN_HELP_MESSAGE],
    [HelpMessageTypes.FRAME, FRAME_HELP_MESSAGE],
    [HelpMessageTypes.NORMALIZE, NORMALIZE_HELP_MESSAGE],
    [HelpMessageTypes.SERIALIZE, SERIALIZE_HELP_MESSAGE]
]);

export function helpMessage(messageType: HelpMessageTypes): string {
    return (MESSAGE_MAP.get(messageType) || '').slice(0);
}
