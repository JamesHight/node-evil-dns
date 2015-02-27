var dns = require('dns');
var expect = require('chai').expect;
var evilDNS = require('../evil-dns');

describe('The method hijacking dns.lookup', function () {
    it('handles family-agnostic queries', function (done) {
        var error = null;
        try {
            dns.lookup('nodejs.org', { family: undefined, hints: dns.ADDRCONFIG | dns.V4MAPPED }, function (err) {
                expect(err).to.not.exist;
                done();
            });
        } catch (err) {
            expect(err).to.not.exist;
            done();
        }
    });
});
