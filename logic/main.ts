export type Config = {
  width: number,
  height: number,
  delay: number,
}

const rule30 = (num: number) => {
  // https://mathworld.wolfram.com/Rule30.html
  if (num > 7 || num < 0) { throw new Error('invalid input'); }

  return (num < 5 && num > 0) ? 1 : 0;
};

const createAxiom = (length: number): number[] => {
  const axiom = new Array<number>(length).fill(0);
  const index = Math.floor(length / 2);

  axiom[index] = 1;

  return axiom;
};

const createNextRow = (currentRow: number[]): number[] => {
  const nextRow = new Array<number>(currentRow.length).fill(0);
  for (let i = 0; i < currentRow.length - 2; i += 1) {
    const val = (currentRow[i] * 4) + (currentRow[i + 1] * 2) + (currentRow[i + 2] * 1);
    nextRow[i + 1] = rule30(val);
  }

  return nextRow;
};

const drawRow = (context: CanvasRenderingContext2D, row: number[], rowIndex: number) => {
  for (let i = 0; i < row.length; i += 1) {
    if (row[i] === 1) {
      context.fillRect(i, rowIndex, 1, 1);
    }
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const computeAndDraw = async (context: CanvasRenderingContext2D, config: Config): Promise<void> => {
  const axiom = createAxiom(config.width);
  const rows = [axiom];

  for (let i = 0; i < config.height; i += 1) {
    drawRow(context, rows[i], i);

    const nextRow = createNextRow(rows[i]);
    rows.push(nextRow);

    await sleep(config.delay);
  }
};

export const clearCanvas = (context: CanvasRenderingContext2D, config: Config): void => {
  context.clearRect(0, 0, config.width, config.height);
};
