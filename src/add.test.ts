import test, { suite } from 'node:test';
import assert from 'node:assert';
import { add } from './add.ts';

suite('Math operations', async () => {
    await test('Addition', () => {
        assert.strictEqual(add(2, 3), 5);
    });
});

