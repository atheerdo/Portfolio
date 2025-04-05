

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Atheer Thayir - Back-End Developer</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">👤 About Me</h2>
        <p>
          Self-taught back-end developer with 3+ years of experience building scalable Windows
          Forms applications and robust RESTful APIs. Passionate about clean code, system
          architecture, and continuous learning. Proficient in C#, .NET technologies, and SQL Server.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔧 Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> C#, T-SQL, JavaScript, TypeScript, HTML, CSS</li>
          <li><strong>Frameworks:</strong> .NET Core, .NET Framework, Windows Forms</li>
          <li><strong>Database:</strong> SQL Server</li>
          <li><strong>Technologies:</strong> ADO.NET, RESTful APIs</li>
          <li><strong>Concepts:</strong> SOLID Principles, OOP</li>
          <li><strong>Currently Learning:</strong> React</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📊 Projects</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">DVLD Project</h3>
          <p>
            A Windows Forms application to manage driver license issuance. Includes modules for
            applicants and licenses.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Designed database schema and integrated with ADO.NET</li>
            <li>Implemented full CRUD functionality</li>
            <li>Validation and state management within forms</li>
          </ul>
          <a
            className="text-blue-600 underline"
            href="https://github.com/atheerdo/DVLD-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold">Bank System</h3>
          <p>
            Comprehensive desktop application for managing banking operations like deposit,
            withdraw, and money transfer.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Built layered architecture for maintainability</li>
            <li>Implemented business logic for transactions and user/client management</li>
            <li>Strong database interaction using T-SQL and ADO.NET</li>
          </ul>
          <a
            className="text-blue-600 underline"
            href="https://github.com/atheerdo/Bank-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🏨 Education</h2>
        <p>Bachelor's Degree in English Language, University of Dayala, College of Education</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📖 Courses</h2>
        <p>
          Completed 25 foundational programming courses on <strong>ProgrammingAdvices.com</strong>.<br />
          Topics: OOP, database management, back-end logic, software architecture
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🌍 Languages</h2>
        <p>Arabic: Native</p>
        <p>English: Mid Level</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">☎️ Contact</h2>
        <p>Email: <a className="text-blue-600" href="mailto:atheer111do@gmail.com">atheer111do@gmail.com</a></p>
        <p>Phone: +905522999667</p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/atheerdo">github.com/atheerdo</a></p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/atheer-thayir/1b8b10319">https://www.linkedin.com/in/atheer-thayir-1b8b10319</a></p>
        <p>Location: Turkey</p>
      </section>
    </main>
  );
}
