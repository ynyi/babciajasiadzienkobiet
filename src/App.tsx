/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LetterSection } from './components/LetterSection';
import { DecorationsSection } from './components/DecorationsSection';
import { CountdownSection } from './components/CountdownSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-12 gap-12 lg:gap-8 overflow-x-hidden font-sans">
      <LetterSection />
      <DecorationsSection />
      <CountdownSection />
    </div>
  );
}
