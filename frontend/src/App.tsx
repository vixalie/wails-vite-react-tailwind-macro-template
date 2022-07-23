import { useCallback, useState } from 'react';
import 'twin.macro';
import reactLogo from './assets/react.svg';
import tailwindLogo from './assets/tailwind.svg';
import { Greet } from './wailsjs/go/main/App';

export const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>('');

  const doGreeting = useCallback(async () => {
    const greetResult = await Greet(name);
    setGreeting(greetResult);
  }, [name]);

  return (
    <div tw="text-center">
      <header tw="h-screen flex flex-col justify-center items-center space-y-2 bg-[#282c34] text-white">
        <div tw="pb-4 flex flex-row justify-center items-center space-x-2">
          <img
            src={reactLogo}
            tw="h-[15vmin] drop-shadow-[0_0_1em_rgba(97,218,251,0.67)] pointer-events-none"
            alt="react-logo"
          />
          <img
            src={tailwindLogo}
            tw="h-[11vmin] drop-shadow-[0_0_1em_rgba(97,218,251,0.67)] pointer-events-none"
            alt="tailwind-logo"
          />
          <img
            src="/vite.svg"
            tw="h-[15vmin] drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] pointer-events-none"
            alt="vite-logo"
          />
        </div>
        <p>Hello React + Tailwind CSS + Vite! Now in Wails!</p>
        <p>
          <button
            type="button"
            tw="px-4 py-1 border border-gray-3 rounded"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <div tw="py-2 flex flex-row justify-center align-middle space-x-2">
          <input
            placeholder="Who are you..."
            value={name}
            onChange={e => setName(e.target.value)}
            tw="text-white px-1 bg-transparent border-b border-gray-3"
          />
          <button type="button" tw="px-4 py-1 border border-gray-3 rounded" onClick={doGreeting}>
            Greet
          </button>
        </div>
        <p>{greeting}</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};
