class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy, :add_topic, :find_topic]
  before_action :set_user, only: [:index, :create]
  before_action :authorize_request

  # GET /posts
  def index
    @posts = Post.where(user_id: @user.id)

    render json: @posts, include: :user, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @user

    if @post.save
      render json: @post, include: :user, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  def add_topic
    @topic = Topic.find(params[:topic_id])
    @post.topics << @topic
    render json: @post, include: :topics
  end

  def find_topic
    @topics = @post.topics
    render json: @topics
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :content)
    end
end
