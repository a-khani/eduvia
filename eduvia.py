# credits to this Stackoverflow question for saving lives:
# https://stackoverflow.com/questions/47192626/deceptively-simple-implementation-of-topological-sorting-in-python
import json

def toposort(graph, node):
    result = []
    seen = set()

    def recursive_helper(node):
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                recursive_helper(neighbor)
        result.insert(0, node)              # this line replaces the result.append line

    recursive_helper(node)
    return result

# CLASSPATH
# finds what path is needed for getting to a class based on given TAKEN class list
def classpath(deets, taken, course, time):
    # run toposort() on the school with the given course
    path = (list) (reversed(toposort(deets['prereqs'], course)))

    def whats_left(taken):
        result = []
        for i in range(len(path)):
            if path[i] not in taken:
                result.append(path[i])
        return result

    def one_pt_zero_gpa_behavior():
        if (deets["type"] == 'hs'):
            for req in deets["reqs"]:
                if req not in taken:
                    print("You won't be able to graduate!")
                    return

    # helper function to see if you have enough time to complete prereqs
    def prereq_check(rem, time_left):
        t = 0
        for i in range(len(rem) - 1):
            if rem[i] in deets["prereqs"][rem[i + 1]]:
                t += 1
        if t >= time_left:
            print("You do not have enough time left to take this course.")
            print("You would need to finish: " + (str) (rem))
        else:
            print("It's doable! Courses needed: " + (str) (rem))
        return [rem, time_left]


    # automates clearing out past prereqs if you've taken a more advanced class
    for i in range(len(taken)):
        uptothat = (toposort(deets['prereqs'], taken[i]))
        taken.extend([u for u in uptothat if u in path])

    # checks which classes you still have remaining
    remaining = whats_left(taken)

    one_pt_zero_gpa_behavior()
    return prereq_check(remaining, time)


def schedule(deets, cp):
    rem, time = cp[0], cp[1]
    sched = []    
    j = 0
    for i in range(time):
        sched.append([])
        while j < len(rem) - 1:
            sched[i].append(rem[j])
            if (rem[j] not in deets["prereqs"][rem[j + 1]]):
                sched[i].append(rem[j + 1])
                j += 1
            else:
                j += 1
                break  
        if j == len(rem) - 1:
            j += 1
        elif j == len(rem):
            sched[i].append(rem[j - 1])
            break
                
    for sem in range(len(sched)):
        print("Sem " + (str) (sem + 1) + ": " + (str) (sched[sem]))

def merge_two_paths(two_paths):
    return two_paths[0] + list(set(paths[1]) - set(paths[0]))

def main():
    f = open("sample.json")
    data = json.load(f)['school_details']

    # take user input to find school
    school = input("Which school do you attend? \n")

    # parse the json file and find the school & its corresponding info
    deets = []
    for i in range(len(data)):
        if(data[i]['school'] == school):
            deets = data[i]
    
    # allows unlimited data entries (and automatically discards invalid entries)
    new_class = ""
    taken = []
    while (new_class != "e"):
        new_class = input("Type a class you've taken (press 'e' to exit): \n")
        if new_class in deets["classes"]: 
            taken.append(new_class)
            
    # ask which course they want to take
    course = ""
    intended = []
    while (course != "e"):
        course = input("Type a class you want to take (press 'e' to exit) \n")
        if (course in taken): 
            print("You've already taken that class!")
        elif course in deets["classes"]:
            intended.append(course)

    # if you request to take a class that's assumed to have been taken, it'll break the code
    # don't do that
    # i will slit you

    # check school types, proceed accordingly
    if (deets["type"] == "hs"):
        time = (int) (input("How many years (including this one) do you have left? \n"))
    else:
        time = (int) (input("How many semesters (including this one) do you have left? \n"))

    paths = [classpath(deets, taken, i, time) for i in intended]
    intended_courses = paths[0]
    for i in range(1, len(paths)):
        intended_courses = merge_two_paths([intended_courses, paths[i]])
    schedule(deets, intended_courses)

main()

##### PAST SAMPLE SETS #####

# graph = {'A':['B','C'],'B':['D','E'],'C':['D','E'],'D':['E'],'E':['A']}
# print(toposort(graph, 'A'))

# courses = {
#         '54': ['1B'], 
#         '53': ['1B'],
#         '1B': ['1A'],
#         '1A': []
#         }
# print(toposort(courses, '54'))

# berkeley_cs = {
#     '189': ['70'],
#     '182': ['61B', '70', '189'],
#     '170': ['61B', '70'],
#     '168': ['162', '61B'],
#     '164': ['61B', '61C'],
#     '162': ['61B', '61C', '70'],
#     '161': ['61C', '70'],
#     '70': [],
#     '61C': ['61B'],
#     '61B': ['61A'],
#     '61A': []
# }

# course = input("Which class? \n")
# result = (list) (reversed(toposort(berkeley_cs, course)))
# print("CS " + course + ": " + (str)(result))

# print("\n")