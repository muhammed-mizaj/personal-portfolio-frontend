import React from 'react';

function StacksServices() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">My Stacks and Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Front-end</h3>
            <p className="text-gray-700">React, Vue, Angular, Svelte, jQuery</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Back-end</h3>
            <p className="text-gray-700">Node.js, PHP, Ruby on Rails, Django, Laravel</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Database</h3>
            <p className="text-gray-700">MySQL, PostgreSQL, MongoDB, Firebase, Cassandra</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">Cloud</h3>
            <p className="text-gray-700">AWS, Google Cloud, Azure, DigitalOcean, Heroku</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StacksServices;
