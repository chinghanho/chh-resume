require "rubygems"

desc "Build Middleman site"
task :generate do
  puts "Building Middleman site"
  run "middleman build -c"
end

desc "Deploy to Github"
task :deploy do
  cd "build" do
    run "git add ."
    puts "\n## Commiting: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    run "git commit -am \"#{message}\""
    puts "\n## Pushing built website"
    run "git push origin gh-pages --force"
    puts "\n## Github Pages deploy complete"
  end
end

def run(cmd)
  `#{cmd}`
end
