const handleSearch = (e) => {
    e.preventDefault();
    Inertia.get(
        `/student?search=${search}&blood_group=${bloodGroup}&session=${session}`
    );
};

<form onSubmit={handleSearch}>
    <input
        type="text"
        name="search"
        placeholder="Search by name or email"
        value={search}
    />

    <select
        name="blood_group"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
    >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        {/* Add more options for other blood groups */}
    </select>

    <select
        name="session"
        value={session}
        onChange={(e) => setSession(e.target.value)}
    >
        <option value="">Select Session</option>
        <option value="2023">2023</option>
        {/* Add more options for other sessions */}
    </select>

    <button type="submit">Search</button>
</form>;
