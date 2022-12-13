var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["val0"] = 0] = "val0";
    TestEnum[TestEnum["val01"] = 1] = "val01";
    TestEnum[TestEnum["val02"] = 2] = "val02";
    TestEnum["val1"] = "dd1";
    TestEnum["val2"] = "dd2";
    TestEnum["val3"] = "dd3";
    TestEnum[TestEnum["val4"] = 2] = "val4";
    TestEnum[TestEnum["val5"] = 3] = "val5";
    TestEnum[TestEnum["val6"] = 4] = "val6";
})(TestEnum || (TestEnum = {}));
console.log('TestEnum', TestEnum);
