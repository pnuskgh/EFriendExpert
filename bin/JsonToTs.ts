import 'reflect-metadata';
import SampleJson from "../files/json/Sample.json";
import { GENERATE_STRATEGY, generator } from '../include/Generator';

const main = () => {
  // TODO: JSON 스키마 체크
  // SampleJson
  generator.generateTs(GENERATE_STRATEGY.SIMPLE_REST, SampleJson);

};

main();