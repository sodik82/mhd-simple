import { expect } from 'chai';
/* globals describe, it */

import sample from './sample';
import { distance } from '../../js/data/suggestions';

describe('distance', function () {
  // allowed distance delta
  const DD = 0.1;
  // budatinska
  const bud = { lat: 48.10619273, long: 17.10091993};
  const aupark = sample['Aupark'];

  it('Budatinska - Aupark is close to 3km', function () {
    const result = distance(bud.lat, bud.long, aupark.x, aupark.y);
    expect(result).to.be.closeTo(3.02, DD);
  });
});
