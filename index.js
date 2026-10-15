import { encodeFrames } from '@leofcoin/binary';

const asBytes = (source) => {
    if (source instanceof Uint8Array)
        return source;
    // Keep legacy ArrayLike coercion. Typed-array callers take the zero-copy path.
    const bytes = new Uint8Array(source.length);
    bytes.set(source);
    return bytes;
};
var index = (input, prefix) => encodeFrames(input.map(asBytes), prefix ? asBytes(prefix) : undefined);

export { index as default };
