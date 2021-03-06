import {DataType, DataTypeOIDs} from '../definitions';
import {SmartBuffer} from '../protocol/SmartBuffer';
// noinspection ES6PreferShortImport
import {fastParseInt} from '../util/fast-parseint';

export const Int2Type: DataType = {

    name: 'int2',
    oid: DataTypeOIDs.int2,
    jsType: 'number',

    parseBinary(v: Buffer): number {
        return v.readInt16BE(0);
    },

    encodeBinary(buf: SmartBuffer, v: number): void {
        buf.writeInt16BE(fastParseInt(v));
    },

    parseText: fastParseInt,

    isType(v: any): boolean {
        return typeof v === 'number' &&
            Number.isInteger(v) && v >= -32768 && v <= 32767;
    }

}

export const ArrayInt2Type: DataType = {
    ...Int2Type,
    name: '_int2',
    oid: DataTypeOIDs._int2,
    elementsOID: DataTypeOIDs.int2
}
