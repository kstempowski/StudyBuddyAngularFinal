"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var question_api_service_1 = require("./question-api.service");
describe('QuestionApiService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(question_api_service_1.QuestionApiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=question-api.service.spec.js.map