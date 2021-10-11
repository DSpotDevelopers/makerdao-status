/* eslint-disable import/prefer-default-export */
import { formatBytes32String } from '@ethersproject/strings';
import { Provider } from 'ethcall';
import { ilkIds } from './constants/ilkIds';
import { jugContract, spotContract, vatContract } from './Contracts';
import { infuraCurrentProvider } from './providers';

export async function loadCollaterals() {
  const ethcallProvider = new Provider();
  await ethcallProvider.init(infuraCurrentProvider);
  const count = ilkIds.length;
  const collateralIdBytes = ilkIds.map((id: string) => formatBytes32String(id));
  const jugIlkCalls = collateralIdBytes.map((ilk: string) =>
    jugContract.ilks(ilk),
  );
  const vatIlkCalls = collateralIdBytes.map((ilk: string) =>
    vatContract.ilks(ilk),
  );
  const spotIlkCalls = collateralIdBytes.map((ilk: string) =>
    spotContract.ilks(ilk),
  );
  const ilkCalls = jugIlkCalls.concat(vatIlkCalls).concat(spotIlkCalls);
  const data = await ethcallProvider.all(ilkCalls);

  return ilkIds.map((id: string) => {
    const index = ilkIds.indexOf(id);
    return {
      id: `ilk-${id}`,
      asset: id,
      art: data[count + index].Art.toString(),
      rate: data[count + index].rate.toString(),
      duty: data[index].duty.toString(),
      line: data[count + index].line.toString(),
      dust: data[count + index].dust.toString(),
      mat: data[2 * count + index].mat.toString(),
    };
  });
}