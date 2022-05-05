import { redirect } from 'remix';

import type { LoaderFunction } from 'remix';

const url = 'https://a.mhaidarhanif.com/twitter';

export const loader: LoaderFunction = async () => {
  return redirect(url);
};
