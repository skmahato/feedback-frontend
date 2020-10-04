import { isEqual } from 'lodash';
import * as immutable from 'object-path-immutable';

export const defaultEntities = {
  users: {}
};

export default function entities(state = defaultEntities, action) {
  if (!action.error && action.payload) {
    const imm = immutable.wrap(state);

    if (action.payload.data) {
      let rows = action.payload.data;

      if (!Array.isArray(rows)) {
        rows = [rows];
      }

      rows.forEach(row => setRecord(state, imm, row));
    }

    if (action.payload.included) {
      let rows = action.payload.included;

      if (!Array.isArray(rows)) {
        rows = [rows];
      }

      rows.forEach(row => setRecord(state, imm, row));
    }

    return imm.value();
  }

  return state;
}

function setRecord(state, imm, row) {
  if (!row.id) return;

  const record = { ...row.attributes, id: row.id };
  const { relationships } = row;

  if (relationships) {
    Object.keys(relationships).forEach((relation) => {
      record[relation] = relationships[relation].data;
    });
  }

  if (!state[row.type] || !isEqual(state[row.type][row.id], record)) {
    imm.set([row.type, row.id], record);
  }
}
