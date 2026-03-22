export function Experience() {
  const skills = [
    'Kotlin',
    'Java',
    'Android SDK',
    'Jetpack Compose',
    'MVVM/MVI',
    'Coroutines',
    'Room Database',
    'Retrofit',
    'Dagger/Hilt',
    'Firebase',
    'Material Design',
    'Clean Architecture',
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I've been crafting Android applications, witnessing and adapting to 
              the platform's evolution from Java to Kotlin, from XML layouts to Jetpack Compose.
            </p>
            <p>
              My expertise spans the full Android development lifecycle, from architecture design 
              and implementation to testing and deployment. I'm passionate about writing clean, 
              maintainable code and following best practices.
            </p>
            <p>
              Beyond coding, I love sharing my knowledge with the developer community through 
              technical articles on Medium, where I write about Android development, best practices, 
              and emerging technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="pt-12">
            <h3 className="text-2xl text-foreground mb-6 text-center font-medium">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted text-foreground/80 rounded-lg hover:bg-green-900/20 hover:text-green-500 transition-colors border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
