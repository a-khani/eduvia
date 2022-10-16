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


def classpath(deets, course, time):

    # run toposort() on the school with the given course
    path = (list) (reversed(toposort(deets['prereqs'], course)))

    # automates clearing out past prereqs if you've taken a more advanced class
    def assumed_prereqs(took):
        uptothat = (toposort(deets['prereqs'], took))
        return [u for u in uptothat if u in path]
        
    for i in range(len(taken)):
        taken.extend(assumed_prereqs(taken[i]))

    # checks which classes you still have remaining
    remaining = []
    for i in range(len(path)):
        if path[i] not in taken:
            remaining.append(path[i])
    
    # see if you have enough time to complete prereqs
    t = 0
    for i in range(len(remaining) - 1):
        if remaining[i] in deets["prereqs"][remaining[i + 1]]:
            t += 1
    if t >= time:
        print("You do not have enough time left to take this course.")
        print("You would need to finish: " + (str) (remaining))
    else:
        print("It's doable! Courses needed: " + (str) (remaining))



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
    course = input("Which course do you want to take? \n")

    if (course in taken): 
        print("You've already taken that class!")
        return

    # if you request to take a class that's assumed to have been taken, it'll break the code
    # don't do that
    # i will slit you

    # check school types, proceed accordingly
    if (deets["type"] == "hs"):
        time = (int) (input("How many years (including this one) do you have left? \n"))
    else:
        time = (int) (input("How many semesters (including this one) do you have left? \n"))

    classpath(deets, course, time)




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