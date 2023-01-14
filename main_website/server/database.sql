CREATE TABLE users(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    registration_id VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    thesis_id UUID,
    education VARCHAR(255) NOT NULL,
    field_of_interest VARCHAR(255) NOT NULL,
    time_of_registration VARCHAR(255) NOT NULL,
    is_avatar_set BOOLEAN NOT NULL,
    avatar_image VARCHAR(255)
);

CREATE TABLE thesis(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    contributors_id UUID ,
    research_area VARCHAR(100) NOT NULL,
    isCompleted BOOLEAN NOT NULL,
    goal_id UUID,
    topic VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL
);

CREATE TABLE contributors(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    user_id UUID NOT NULL,
    isMentor BOOLEAN NOT NULL,
    thesis_id UUID NOT NULL
);

CREATE TABLE goals(
    id UUID DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    isCompleted BOOLEAN NOT NULL,
    deadline VARCHAR(100),
    task VARCHAR(255) NOT NULL,
    alloted_by VARCHAR(255) NOT NULL,
    feedback VARCHAR(255) NOT NULL,
    thesis_id UUID NOT NULL
);

CREATE TABLE goo