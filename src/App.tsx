import React from 'react';
import { Route } from 'constants/route';
import { Outlet, Link } from 'react-router';

function App() {
  return (
    <main>
      <header>
        <h1 className="p-2 font-bold text-cyan-600 border-b border-slate-200">Podcaster</h1>

        <nav>
          <ul>
            <li>
              <Link to={Route.Home}>Inicio</Link>
            </li>

            <li>
              <Link to="/podcast/123">Ver Podcast</Link>
            </li>

            <li>
              <Link to="/podcast/123/episode/456">Ver Episodio</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </main>
  );
}

export default App;
