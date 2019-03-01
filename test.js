

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test( "TestVolume", function( assert ) 
{
            var res = calcVolume(2,3,4);
            assert.equal( res, "8", "volume of pyramid with these inputs will be 8" );
});

QUnit.test( "TestVolume", function( assert ) 
{
            var res = calcVolume(-1,3,4);
            assert.equal( res, "-4", "Invalid input - cannot be negative" );
});
QUnit.test( "TestVolume", function( assert ) 
{
            var res = calcVolume(100001,3,4);
            assert.equal( res, "400004", "Invalid input - Can not be too large" );
});
         
         







