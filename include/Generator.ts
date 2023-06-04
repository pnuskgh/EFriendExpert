import ejs from "ejs";
import { writeFileSync } from "fs";

export enum GENERATE_STRATEGY {
  SIMPLE_REST = 'simple-rest'
}

class Generator {
  generateTs(strategy: GENERATE_STRATEGY, json: any) {
    switch (strategy) {
      case GENERATE_STRATEGY.SIMPLE_REST:
        this.generateSimpleRestTs(json);
    }
  }

  async generateSimpleRestTs(json: any) {
    const modelTsText = await ejs.renderFile(`${process.cwd()}/files/ejs/${GENERATE_STRATEGY.SIMPLE_REST}-model.ejs`, {
      resourceName: 'InquirePrice',
      fields: json.response.body.find((bodyItem: any) => bodyItem.code === 'output').children
    });
    this.saveTsFile('/sample/sample.ts', modelTsText);
  }

  private saveTsFile(filePath: string, text: string) {
    writeFileSync(`${process.cwd()}/output${filePath}`, text);
  }
}

export const generator = new Generator();