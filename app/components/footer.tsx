import type { FunctionComponent } from 'react';
import { Anchor } from '~/components';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-200/5">
      <div className="flex py-4">
        <p className="space-x-1">
          <span>&copy;</span>
          <span>{year}</span>
          <span>•</span>
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            <code>rewinds</code>
          </Anchor>
          <span>•</span>
          <Anchor href="https://twitter.com/mhaidarhanif">Twitter</Anchor>
          <span>•</span>
          <Anchor href="https://github.com/mhaidarhanif">GitHub</Anchor>
        </p>
      </div>
    </footer>
  );
};
