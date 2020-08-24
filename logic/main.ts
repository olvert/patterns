export type Config = {
  width: number,
  height: number,
  rule: string,
  pixelSize: number,
  delay: number,
}

class Rules {
  static readonly rule30 = [0, 1, 1, 1, 1, 0, 0, 0];

  static readonly rule90 = [0, 1, 0, 1, 1, 0, 1, 0];
}

const getRule = (rule: string): number[] => {
  switch (rule) {
    case '30':
      return Rules.rule30;
    case '90':
      return Rules.rule90;
    default:
      throw new Error(`invalid argument in getRule: ${rule}`);
  }
};

const createAxiom = (length: number): number[] => {
  const axiom = new Array<number>(length).fill(0);
  const index = Math.floor(length / 2);

  axiom[index] = 1;

  return axiom;
};

const createNextRow = (currentRow: number[], rule: number[]): number[] => {
  const nextRow = new Array<number>(currentRow.length).fill(0);
  for (let i = 0; i < currentRow.length - 2; i += 1) {
    const val = (currentRow[i] * 4) + (currentRow[i + 1] * 2) + (currentRow[i + 2] * 1);
    nextRow[i + 1] = rule[val];
  }

  return nextRow;
};

const drawRow = (context: CanvasRenderingContext2D, row: number[], rowIndex: number, pixelSize: number) => {
  for (let i = 0; i < row.length; i += 1) {
    if (row[i] === 1) {
      context.fillRect(i * pixelSize, rowIndex * pixelSize, pixelSize, pixelSize);
    }
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const computeAndDraw = async (context: CanvasRenderingContext2D, config: Config): Promise<void> => {
  const rule = getRule(config.rule);
  const axiom = createAxiom(config.width);
  const rows = [axiom];

  for (let i = 0; i < config.height; i += 1) {
    drawRow(context, rows[i], i, config.pixelSize);

    const nextRow = createNextRow(rows[i], rule);
    rows.push(nextRow);

    if (config.delay > 0) {
      await sleep(config.delay);
    }
  }
};

export const clearCanvas = (context: CanvasRenderingContext2D, config: Config): void => {
  context.clearRect(0, 0, config.width, config.height);
};
