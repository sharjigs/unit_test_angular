describe('hellotest', () => {

    let expected = '';
    let notExpected = '';
    let expectedMatch = null;

    beforeEach(() => {
        expected = "hellotest";
        notExpected = "hellotest123";
        expectedMatch = new RegExp(/^hello/);
    }
    );

    afterEach(() => {
        expected = '';
        notExpected = '';
        expectedMatch = null;
    });

    it('check if hellotest is hellotest',
        () => expect('hellotest').toBe(expected)
    );

    it('check if hellotest is not hellotest',
        () => expect('hellotest').not.toBe(notExpected)
    );

    it('check if hellotest start with hello',
        () => expect('hellotest').not.toBe(expectedMatch)
    );
})