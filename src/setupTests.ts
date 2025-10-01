import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

if (!globalThis.TextEncoder) {
  (
    globalThis as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }
  ).TextEncoder = TextEncoder;
}

if (!globalThis.TextDecoder) {
  (
    globalThis as { TextEncoder?: typeof TextEncoder; TextDecoder?: typeof TextDecoder }
  ).TextDecoder = TextDecoder;
}
