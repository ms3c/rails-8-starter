class WelcomeController < ApplicationController
    def index
        info = { title: "Rails 8", description: "Welcome to Rails 8" }
        render inertia: "Home", props: { info: }
    end
end